import { SpeakeasyBase } from "../../../internal/utils";
import { ScorePrivacyEnum } from "./scoreprivacyenum";
import { ScoreSource } from "./scoresource";
/**
 * The optional encoding of the score data. This property must match the encoding used for the `data` property.
 */
export declare enum ScoreCreationDataEncodingEnum {
    Base64 = "base64"
}
/**
 * A new created score
 */
export declare class ScoreCreation extends SpeakeasyBase {
    /**
     * Unique identifier of a collection where the score will be created.
     *
     * @remarks
     * If no collection identifier is provided, the score will be stored in the `root` directory.
     *
     */
    collection?: string;
    /**
     * The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.
     *
     * @remarks
     * Binary payloads (`vnd.recordare.musicxml` and `audio/midi`) can be encoded in Base64, in this case the `dataEncoding` property must match the encoding used for the API request.
     *
     */
    data?: string;
    /**
     * The optional encoding of the score data. This property must match the encoding used for the `data` property.
     */
    dataEncoding?: ScoreCreationDataEncodingEnum;
    /**
     * If this is an imported file, its filename
     */
    filename?: string;
    /**
     * If the user uses Google Drive and this properties is specified, the file will be created in this directory. The currently user creating the file must be granted to write in this directory.
     *
     * @remarks
     *
     */
    googleDriveFolder?: string;
    /**
     * The score main privacy mode.
     *
     * @remarks
     *
     * - `public`: The score is public on the Internet. This one can be accessible at the url `https://flat.io/score/{score}` and can be modified and administred by specified collaborators users.
     * - `private`: The score is private and can be only accessed, modified and administred by specified collaborators users.
     * - `privateLink`: The score is private but can be accessed using a private link `htmlUrl` or the private key in the property `sharingKey`.
     * - `organizationPublic`: _Available only with [Flat for Education](https://flat.io/edu)._ The score is public in the organization: users of the same organization can access to this one. The score can be modified and administred by specified collaborators users.
     *
     * The score can also be individually shared to a set of users or groups using the different collaborators API methods.
     *
     * When a file is synchronized from an external source (e.g. Google Drive) and the sharing options are changed on the source, Flat will chose the best privacy mode for the file.
     *
     * When using a [Flat for Education](https://flat.io/edu) account, some of the modes may not be available if disabled by an administrator of the organization (e.g. by default the `public` mode is not available).
     *
     */
    privacy: ScorePrivacyEnum;
    source?: ScoreSource;
    /**
     * The title of the new score. If the title is too long, the API may trim this one.
     *
     * @remarks
     *
     * If this title is not specified, the API will try to (in this order):
     *   - Use the title contained in the file (e.g. [`movement-title`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-movement-title.htm) or [`credit-words`](https://usermanuals.musicxml.com/MusicXML/Content/EL-MusicXML-credit-words.htm) for [MusicXML](http://www.musicxml.com/) files).
     *   - Use the name of the file for files from a specified `source` (e.g. Google Drive) or the one in the `filename` property
     *   - Set a default title (e.g. "New Music Score")
     *
     */
    title?: string;
}
