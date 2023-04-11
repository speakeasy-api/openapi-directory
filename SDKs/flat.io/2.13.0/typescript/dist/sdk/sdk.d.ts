import { Account } from "./account";
import { Class } from "./class";
import { Collection } from "./collection";
import { Group } from "./group";
import { Organization } from "./organization";
import { Score } from "./score";
import { User } from "./user";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.flat.io/v2"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Flat API allows you to easily extend the abilities of the [Flat Platform](https://flat.io), with a wide range of use cases including the following:
 *
 * @remarks
 *
 * * Creating and importing new music scores using MusicXML, MIDI, Guitar Pro (GP3, GP4, GP5, GPX, GP), PowerTab, TuxGuitar and MuseScore files
 * * Browsing, updating, copying, exporting the user's scores (for example in MP3, WAV or MIDI)
 * * Managing educational resources with Flat for Education: creating & updating the organization accounts, the classes, rosters and assignments.
 *
 * The Flat API is built on HTTP. Our API is RESTful It has predictable resource URLs. It returns HTTP response codes to indicate errors. It also accepts and returns JSON in the HTTP body.
 * The [schema](/swagger.yaml) of this API follows the [OpenAPI Initiative (OAI) specification](https://www.openapis.org/), you can use and work with [compatible Swagger tools](http://swagger.io/open-source-integrations/).
 * This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with [W3C spec](https://www.w3.org/TR/cors/).
 *
 * You can use your favorite HTTP/REST library for your programming language to use Flat's API. This specification and reference is [available on Github](https://github.com/FlatIO/api-reference).
 *
 * Getting Started and learn more:
 *
 * * [API Overview and introduction](https://flat.io/developers/docs/api/)
 * * [Authentication (Personal Access Tokens or OAuth2)](https://flat.io/developers/docs/api/authentication.html)
 * * [SDKs](https://flat.io/developers/docs/api/sdks.html)
 * * [Rate Limits](https://flat.io/developers/docs/api/rate-limits.html)
 * * [Changelog](https://flat.io/developers/docs/api/changelog.html)
 *
 */
export declare class SDK {
    /**
     * These API endpoints are related to the Flat account you are currently using. When using an OAuth2 access token, you can use [`GET /me`](#operation/getAuthenticatedUser) to get information about the account.
     *
     * @remarks
     *
     */
    account: Account;
    /**
     * Flat for Education classes
     */
    class: Class;
    /**
     * Collections let you organize your content in a Flat account. They work like a regular _folder_ with some specificities:
     *
     * @remarks
     *   - Our design goal here is to create a system similar to a _book_ or a _playlist of songs_.
     *   - Collections can't have children collections (except the `trash` and `sharedWithMe` that are special collections).
     *   - Any score can be added to one or multiple collections. For example, you can have a single private score in two or more collections, or add any public or shared scores to one of your collections.
     *
     * All the collections don't have the same capabilities. Capabilities depend on the `type` of collection and the `rights` you have on a collection. They are available when [listing the collection](#operation/listCollections) or [retrieving the collection details](#operation/getCollection).
     *
     * At this time, only `private` privacy mode is widely available. Privacy modes `public`, `organizationPublic` and `privateLink`, and 1:1 sharing will be available in an upcoming update later this year.
     *
     */
    collection: Collection;
    /**
     * Flat Groups
     */
    group: Group;
    /**
     * Flat for Education organizations
     */
    organization: Organization;
    /**
     * Sheet music is the main API object type available for all Flat account.
     *
     * @remarks
     * Here is a typical lifecycle for a music score document on Flat:
     *   - An end user can **create a music score** or **import a document** using our [web interface](https://flat.io) or a third-party website/app (e.g. Google Drive) using this API (see [`POST /v2/scores`](#operation/createScore). The creation and import of music scores can be done with this single API endpoint. This one currently supports the [MusicXML](http://www.musicxml.com/) (compressed or not) and [MIDI](https://www.midi.org/specifications).
     *   - **List scores**:
     *     - The **owned scores** can be listed using the [collections API methods](#tag/Collection), especially [`GET /collections/{collection}/scores`](#operation/listCollectionScores).
     *     - The scores from a public account can be listed with [`GET /users/{user}/scores`](#operation/getUserScores).
     *     - Scores shared with a specific group can be listed with [`GET /groups/{group}/scores`](#operation/getGroupScores).
     *   - The metadata of a single score can be retrieved with [`GET /scores/{score}`](#operation/getScore).
     *   - Scores on Flat have **one or multiple revisions**: creating a new score will create a first revision. These **revisions can be listed** using [`GET /scores/{score}/revisions`](#operation/getScoreRevisions) and a specific **revision data can be downloaded** with [`GET /scores/{score}/revisions/{revision}/{format}`](#operation/getScoreRevisionData). New revisions can be created using our [sheet music editor](https://flat.io) or using [`POST /scores/{score}/revisions`](#operation/createScoreRevision) (this endpoint has similar parameters than during the score creation). The last revision of a document may not directly reflect the really last version of a music score: recent modifications can be made offline or not yet consolidated into a new revision. In average, a new revision is created every 100 modifications made with our editor.
     *   - Scores can be **shared publicly** by changing the privacy option with [`POST /scores/{score}`](#operation/editScore), or **individually shared** using the different collaborators API endpoints (see [`POST /scores/{score}/collaborators`](#operation/addScoreCollaborator)).
     *
     */
    score: Score;
    /**
     * Flat users
     */
    user: User;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
