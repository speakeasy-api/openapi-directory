import { SpeakeasyBase } from "../../../internal/utils";
import { InputConfig } from "./inputconfig";
import { NeoVpcConfig } from "./neovpcconfig";
import { OutputConfig } from "./outputconfig";
import { StoppingCondition } from "./stoppingcondition";
import { Tag } from "./tag";
export declare class CreateCompilationJobRequest extends SpeakeasyBase {
    compilationJobName: string;
    inputConfig?: InputConfig;
    modelPackageVersionArn?: string;
    outputConfig: OutputConfig;
    roleArn: string;
    stoppingCondition: StoppingCondition;
    tags?: Tag[];
    vpcConfig?: NeoVpcConfig;
}
