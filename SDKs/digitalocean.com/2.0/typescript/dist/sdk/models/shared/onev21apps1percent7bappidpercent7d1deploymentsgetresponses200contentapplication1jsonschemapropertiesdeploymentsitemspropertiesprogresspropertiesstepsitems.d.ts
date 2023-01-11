import { SpeakeasyBase } from "../../../internal/utils";
export declare class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItemsReason extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare enum Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItemsStatusEnum {
    Unknown = "UNKNOWN",
    Pending = "PENDING",
    Running = "RUNNING",
    Error = "ERROR",
    Success = "SUCCESS"
}
export declare class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems extends SpeakeasyBase {
    componentName?: string;
    endedAt?: Date;
    messageBase?: string;
    name?: string;
    reason?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItemsReason;
    startedAt?: Date;
    status?: Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItemsStatusEnum;
    steps?: Record<string, any>[];
}
