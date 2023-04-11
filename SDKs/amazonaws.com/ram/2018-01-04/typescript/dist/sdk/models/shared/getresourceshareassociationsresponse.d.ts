import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";
/**
 * Success
 */
export declare class GetResourceShareAssociationsResponse extends SpeakeasyBase {
    nextToken?: string;
    resourceShareAssociations?: ResourceShareAssociation[];
}
