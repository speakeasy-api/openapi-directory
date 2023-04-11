import { SpeakeasyBase } from "../../../internal/utils";
import { FlagReference } from "./flagreference";
export declare class CodeReferenceRequest extends SpeakeasyBase {
    /**
     * The currently active branches of the repository. Each previously uploaded report that belongs to a non-reported active branch is being deleted.
     */
    activeBranches?: string[];
    /**
     * The source control branch on where the scan was performed. (Source of the branch selector on the ConfigCat Dashboard)
     */
    branch: string;
    /**
     * The related commit's hash. (Appears on the ConfigCat Dashboard)
     */
    commitHash?: string;
    /**
     * The related commit's URL. (Appears on the ConfigCat Dashboard)
     */
    commitUrl?: string;
    /**
     * The Config's identifier the scanning was performed against.
     */
    configId: string;
    /**
     * The actual code reference collection.
     */
    flagReferences?: FlagReference[];
    /**
     * The source control repository that contains the scanned code. (Source of the repository selector on the ConfigCat Dashboard)
     */
    repository: string;
    /**
     * The scanning tool's name. (Appears on the ConfigCat Dashboard)
     */
    uploader?: string;
}
