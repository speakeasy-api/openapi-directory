import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceCollaborator } from "./resourcecollaborator";
import { ResourceRights } from "./resourcerights";
import { ScoreCommentsCounts } from "./scorecommentscounts";
import { ScoreCreationTypeEnum } from "./scorecreationtypeenum";
import { ScoreLicenseEnum } from "./scorelicenseenum";
import { ScoreLikesCounts } from "./scorelikescounts";
import { ScorePlaysCounts } from "./scoreplayscounts";
import { ScorePrivacyEnum } from "./scoreprivacyenum";
import { ScoreViewsCounts } from "./scoreviewscounts";
import { UserPublicSummary } from "./userpublicsummary";
/**
 * A summary of the score details
 */
export declare class ScoreDetails extends SpeakeasyBase {
    /**
     * Arranger of the score
     */
    arranger?: string;
    /**
     * The list of the collaborators of the score
     */
    collaborators?: ResourceCollaborator[];
    /**
     * The List of parent collections, which includes all the collections this score is included. Please note that you might not have access to all of them.
     */
    collections?: string[];
    /**
     * A computed version of the total, unique, weekly and monthly number of
     *
     * @remarks
     * comments added on the documents (this doesn't include inline comments).
     *
     */
    comments?: ScoreCommentsCounts;
    /**
     * Composer of the score
     */
    composer?: string;
    /**
     * The date when the score was created
     */
    creationDate?: Date;
    /**
     * The type of creation (an orginal, an arrangement)
     */
    creationType?: ScoreCreationTypeEnum;
    /**
     * Description of the creation
     */
    description?: string;
    /**
     * In seconds, an approximative duration of the score
     */
    durationTime?: number;
    /**
     * If the user uses Google Drive and the score exists on Google Drive, this field will contain the unique identifier of the Flat score on Google Drive. You can access the document using the url: `https://drive.google.com/open?id={googleDriveFileId}`
     *
     * @remarks
     *
     */
    googleDriveFileId?: string;
    /**
     * The url where the score can be viewed in a web browser
     */
    htmlUrl?: string;
    /**
     * The unique identifier of the score
     */
    id?: string;
    /**
     * An array of the instrument identifiers used in the last version of the score. This is mainly used to display a list of the instruments in the Flat's UI or instruments icons. The format of the strings is `{instrument-group}.{instrument-id}`.
     *
     * @remarks
     *
     */
    instruments?: string[];
    /**
     * License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/
     *
     * @remarks
     *
     */
    license?: ScoreLicenseEnum;
    /**
     * Additional license text written on the exported/printed score
     */
    licenseText?: string;
    /**
     * A computed version of the weekly, monthly and total of number of likes
     *
     * @remarks
     * for a score
     *
     */
    likes?: ScoreLikesCounts;
    /**
     * Lyricist of the score
     */
    lyricist?: string;
    /**
     * The main tempo of the score (in QPM)
     */
    mainTempoQpm?: number;
    /**
     * The date of the last revision of the score
     */
    modificationDate?: Date;
    /**
     * The number of measures in the score
     */
    numberMeasures?: number;
    /**
     * If the score has been created in an organization, the identifier of this organization. This property is especially used with the score privacy `organizationPublic`.
     *
     * @remarks
     *
     */
    organization?: string;
    /**
     * If the score has been forked, the unique identifier of the parent score.
     *
     * @remarks
     *
     */
    parentScore?: string;
    /**
     * A computed version of the total, weekly, and monthly number of plays of
     *
     * @remarks
     * the score
     *
     */
    plays?: ScorePlaysCounts;
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
    privacy?: ScorePrivacyEnum;
    /**
     * The date when the score was published on Flat
     */
    publicationDate?: Date;
    /**
     * The rights of the current user on a score or collection
     */
    rights?: ResourceRights;
    /**
     * An array of the audio samples identifiers used the different score parts.
     *
     * @remarks
     * The format of the strings is `{instrument-group}.{sample-id}`.
     *
     */
    samples?: string[];
    /**
     * The private sharing key of the score (available when the `privacy` mode is set to `privateLink`)
     */
    sharingKey?: string;
    /**
     * Subtitle of the score
     */
    subtitle?: string;
    /**
     * Tags describing the score
     */
    tags?: string[];
    /**
     * The title of the score
     */
    title?: string;
    /**
     * Public User details summary
     */
    user?: UserPublicSummary;
    /**
     * A computed version of the total, weekly, and monthly number of views of
     *
     * @remarks
     * the score
     *
     */
    views?: ScoreViewsCounts;
}
