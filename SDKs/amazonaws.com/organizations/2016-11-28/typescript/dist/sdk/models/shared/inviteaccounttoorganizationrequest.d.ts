import { SpeakeasyBase } from "../../../internal/utils";
import { HandshakeParty } from "./handshakeparty";
import { Tag } from "./tag";
export declare class InviteAccountToOrganizationRequest extends SpeakeasyBase {
    notes?: string;
    tags?: Tag[];
    target: HandshakeParty;
}
