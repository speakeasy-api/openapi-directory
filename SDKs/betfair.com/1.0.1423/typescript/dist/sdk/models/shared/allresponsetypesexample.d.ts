import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionMessage } from "./connectionmessage";
import { MarketChangeMessage } from "./marketchangemessage";
import { OrderChangeMessage } from "./orderchangemessage";
import { StatusMessage } from "./statusmessage";
export declare enum AllResponseTypesExampleOpTypesEnum {
    Connection = "connection",
    Status = "status",
    Mcm = "mcm",
    Ocm = "ocm"
}
/**
 * Responses are received from socket
 */
export declare class AllResponseTypesExample extends SpeakeasyBase {
    connection?: ConnectionMessage;
    marketChangeMessage?: MarketChangeMessage;
    opTypes?: AllResponseTypesExampleOpTypesEnum;
    orderChangeMessage?: OrderChangeMessage;
    status?: StatusMessage;
}
