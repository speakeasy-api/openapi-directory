import { SpeakeasyBase } from "../../../internal/utils";
import { GdgDetailAttributes } from "./gdgdetailattributes";
import { VsamDetailAttributes } from "./vsamdetailattributes";
/**
 * Additional details about the data set. Different attributes correspond to different data set organizations. The values are populated based on datasetOrg, storageType and backend (Blu Age or Micro Focus).
 */
export declare class DatasetDetailOrgAttributes extends SpeakeasyBase {
    gdg?: GdgDetailAttributes;
    vsam?: VsamDetailAttributes;
}
