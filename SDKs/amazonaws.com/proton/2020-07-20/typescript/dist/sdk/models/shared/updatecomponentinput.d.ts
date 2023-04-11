import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentDeploymentUpdateTypeEnum } from "./componentdeploymentupdatetypeenum";
export declare class UpdateComponentInput extends SpeakeasyBase {
    deploymentType: ComponentDeploymentUpdateTypeEnum;
    description?: string;
    name: string;
    serviceInstanceName?: string;
    serviceName?: string;
    serviceSpec?: string;
    templateFile?: string;
}
