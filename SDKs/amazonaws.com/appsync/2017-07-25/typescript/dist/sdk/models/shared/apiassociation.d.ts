import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStatusEnum } from "./associationstatusenum";
/**
 * Describes an <code>ApiAssociation</code> object.
 */
export declare class ApiAssociation extends SpeakeasyBase {
    apiId?: string;
    associationStatus?: AssociationStatusEnum;
    deploymentDetail?: string;
    domainName?: string;
}
