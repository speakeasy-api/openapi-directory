import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
/**
 * Success
 */
export declare class CreateSecretResponse extends SpeakeasyBase {
    arn?: string;
    name?: string;
    replicationStatus?: ReplicationStatusType[];
    versionId?: string;
}
