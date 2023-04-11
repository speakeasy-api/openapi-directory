import { SpeakeasyBase } from "../../../internal/utils";
import { RegionInfo } from "./regioninfo";
import { ReplicationSetStatusEnum } from "./replicationsetstatusenum";
/**
 * The set of Amazon Web Services Region that your Incident Manager data will be replicated to and the KMS key used to encrypt the data.
 */
export declare class ReplicationSet extends SpeakeasyBase {
    arn?: string;
    createdBy: string;
    createdTime: Date;
    deletionProtected: boolean;
    lastModifiedBy: string;
    lastModifiedTime: Date;
    regionMap: Record<string, RegionInfo>;
    status: ReplicationSetStatusEnum;
}
