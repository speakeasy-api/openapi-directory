import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Certificate } from "./certificate";
import { ProtocolEnumEnum } from "./protocolenumenum";
export declare class ModifyListenerInput extends SpeakeasyBase {
    alpnPolicy?: string[];
    certificates?: Certificate[];
    defaultActions?: Action[];
    listenerArn: string;
    port?: number;
    protocol?: ProtocolEnumEnum;
    sslPolicy?: string;
}
