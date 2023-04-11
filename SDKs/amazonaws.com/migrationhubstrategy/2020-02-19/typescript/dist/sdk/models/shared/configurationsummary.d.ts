import { SpeakeasyBase } from "../../../internal/utils";
import { IPAddressBasedRemoteInfo } from "./ipaddressbasedremoteinfo";
import { PipelineInfo } from "./pipelineinfo";
import { RemoteSourceCodeAnalysisServerInfo } from "./remotesourcecodeanalysisserverinfo";
import { VcenterBasedRemoteInfo } from "./vcenterbasedremoteinfo";
import { VersionControlInfo } from "./versioncontrolinfo";
/**
 * Summary of the collector configuration.
 */
export declare class ConfigurationSummary extends SpeakeasyBase {
    ipAddressBasedRemoteInfoList?: IPAddressBasedRemoteInfo[];
    pipelineInfoList?: PipelineInfo[];
    remoteSourceCodeAnalysisServerInfo?: RemoteSourceCodeAnalysisServerInfo;
    vcenterBasedRemoteInfoList?: VcenterBasedRemoteInfo[];
    versionControlInfoList?: VersionControlInfo[];
}
