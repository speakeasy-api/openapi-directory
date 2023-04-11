import { SpeakeasyBase } from "../../../internal/utils";
import { AssistantAssociationOutputData } from "./assistantassociationoutputdata";
import { AssociationTypeEnum } from "./associationtypeenum";
/**
 * Information about the assistant association.
 */
export declare class AssistantAssociationData extends SpeakeasyBase {
    assistantArn: string;
    assistantAssociationArn: string;
    assistantAssociationId: string;
    assistantId: string;
    associationData: AssistantAssociationOutputData;
    associationType: AssociationTypeEnum;
    tags?: Record<string, string>;
}
