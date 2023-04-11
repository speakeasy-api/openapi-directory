import { SpeakeasyBase } from "../../../internal/utils";
import { ScoreCreationTypeEnum } from "./scorecreationtypeenum";
import { ScoreLicenseEnum } from "./scorelicenseenum";
import { ScorePrivacyEnum } from "./scoreprivacyenum";
/**
 * Edit the score metadata
 */
export declare class ScoreModification extends SpeakeasyBase {
    /**
     * The arranger of the score
     */
    arranger?: string;
    /**
     * The composer of the score
     */
    composer?: string;
    /**
     * The type of creation (an orginal, an arrangement)
     */
    creationType?: ScoreCreationTypeEnum;
    /**
     * Description of the creation
     */
    description?: string;
    /**
     * License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/
     *
     * @remarks
     *
     */
    license?: ScoreLicenseEnum;
    /**
     * The rights info written on the score
     */
    licenseText?: string;
    /**
     * The lyricist of the score
     */
    lyricist?: string;
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
     * When using the `privacy` mode `privateLink`, this property can be used to set a custom sharing key, otherwise a new key will be generated.
     */
    sharingKey?: string;
    /**
     * The subtitle of the score
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
}
