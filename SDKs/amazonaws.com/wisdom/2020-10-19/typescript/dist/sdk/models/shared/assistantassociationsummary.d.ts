import { SpeakeasyBase } from "../../../internal/utils";
import { AssistantAssociationOutputData } from "./assistantassociationoutputdata";
import { AssociationTypeEnum } from "./associationtypeenum";
/**
 * Summary information about the assistant association.
 */
export declare class AssistantAssociationSummary extends SpeakeasyBase {
    assistantArn: string;
    assistantAssociationArn: string;
    assistantAssociationId: string;
    assistantId: string;
    associationData: AssistantAssociationOutputData;
    associationType: AssociationTypeEnum;
    tags?: Record<string, string>;
}
