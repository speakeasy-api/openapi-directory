import { SpeakeasyBase } from "../../../internal/utils";
import { GdgAttributes } from "./gdgattributes";
import { VsamAttributes } from "./vsamattributes";
/**
 * Additional details about the data set. Different attributes correspond to different data set organizations. The values are populated based on datasetOrg, storageType and backend (Blu Age or Micro Focus).
 */
export declare class DatasetOrgAttributes extends SpeakeasyBase {
    gdg?: GdgAttributes;
    vsam?: VsamAttributes;
}
