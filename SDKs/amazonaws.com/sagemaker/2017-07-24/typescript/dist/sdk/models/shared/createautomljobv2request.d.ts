import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLDataSplitConfig } from "./automldatasplitconfig";
import { AutoMLJobChannel } from "./automljobchannel";
import { AutoMLJobObjective } from "./automljobobjective";
import { AutoMLOutputDataConfig } from "./automloutputdataconfig";
import { AutoMLProblemTypeConfig } from "./automlproblemtypeconfig";
import { AutoMLSecurityConfig } from "./automlsecurityconfig";
import { ModelDeployConfig } from "./modeldeployconfig";
import { Tag } from "./tag";
export declare class CreateAutoMLJobV2Request extends SpeakeasyBase {
    autoMLJobInputDataConfig: AutoMLJobChannel[];
    autoMLJobName: string;
    autoMLJobObjective?: AutoMLJobObjective;
    autoMLProblemTypeConfig: AutoMLProblemTypeConfig;
    dataSplitConfig?: AutoMLDataSplitConfig;
    modelDeployConfig?: ModelDeployConfig;
    outputDataConfig: AutoMLOutputDataConfig;
    roleArn: string;
    securityConfig?: AutoMLSecurityConfig;
    tags?: Tag[];
}
