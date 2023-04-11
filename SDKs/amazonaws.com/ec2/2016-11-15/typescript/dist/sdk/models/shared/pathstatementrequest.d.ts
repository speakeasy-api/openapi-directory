import { SpeakeasyBase } from "../../../internal/utils";
import { PacketHeaderStatementRequest } from "./packetheaderstatementrequest";
import { ResourceStatementRequest } from "./resourcestatementrequest";
/**
 * Describes a path statement.
 */
export declare class PathStatementRequest extends SpeakeasyBase {
    packetHeaderStatement?: PacketHeaderStatementRequest;
    resourceStatement?: ResourceStatementRequest;
}
