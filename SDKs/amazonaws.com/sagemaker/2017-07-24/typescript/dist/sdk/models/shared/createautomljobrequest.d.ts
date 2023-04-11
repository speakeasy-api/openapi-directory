import { SpeakeasyBase } from "../../../internal/utils";
import { AutoMLChannel } from "./automlchannel";
import { AutoMLJobConfig } from "./automljobconfig";
import { AutoMLJobObjective } from "./automljobobjective";
import { AutoMLOutputDataConfig } from "./automloutputdataconfig";
import { ModelDeployConfig } from "./modeldeployconfig";
import { ProblemTypeEnum } from "./problemtypeenum";
import { Tag } from "./tag";
export declare class CreateAutoMLJobRequest extends SpeakeasyBase {
    autoMLJobConfig?: AutoMLJobConfig;
    autoMLJobName: string;
    autoMLJobObjective?: AutoMLJobObjective;
    generateCandidateDefinitionsOnly?: boolean;
    inputDataConfig: AutoMLChannel[];
    modelDeployConfig?: ModelDeployConfig;
    outputDataConfig: AutoMLOutputDataConfig;
    problemType?: ProblemTypeEnum;
    roleArn: string;
    tags?: Tag[];
}
