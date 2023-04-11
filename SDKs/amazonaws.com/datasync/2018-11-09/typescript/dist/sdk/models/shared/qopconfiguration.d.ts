import { SpeakeasyBase } from "../../../internal/utils";
import { HdfsDataTransferProtectionEnum } from "./hdfsdatatransferprotectionenum";
import { HdfsRpcProtectionEnum } from "./hdfsrpcprotectionenum";
/**
 * The Quality of Protection (QOP) configuration specifies the Remote Procedure Call (RPC) and data transfer privacy settings configured on the Hadoop Distributed File System (HDFS) cluster.
 */
export declare class QopConfiguration extends SpeakeasyBase {
    dataTransferProtection?: HdfsDataTransferProtectionEnum;
    rpcProtection?: HdfsRpcProtectionEnum;
}
