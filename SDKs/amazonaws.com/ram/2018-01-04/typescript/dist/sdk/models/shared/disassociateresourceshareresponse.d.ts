import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";
/**
 * Success
 */
export declare class DisassociateResourceShareResponse extends SpeakeasyBase {
    clientToken?: string;
    resourceShareAssociations?: ResourceShareAssociation[];
}
