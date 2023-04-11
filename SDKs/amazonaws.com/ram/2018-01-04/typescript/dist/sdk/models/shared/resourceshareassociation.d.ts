import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociationStatusEnum } from "./resourceshareassociationstatusenum";
import { ResourceShareAssociationTypeEnum } from "./resourceshareassociationtypeenum";
/**
 * Describes an association with a resource share and either a principal or a resource.
 */
export declare class ResourceShareAssociation extends SpeakeasyBase {
    associatedEntity?: string;
    associationType?: ResourceShareAssociationTypeEnum;
    creationTime?: Date;
    external?: boolean;
    lastUpdatedTime?: Date;
    resourceShareArn?: string;
    resourceShareName?: string;
    status?: ResourceShareAssociationStatusEnum;
    statusMessage?: string;
}
