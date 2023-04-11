import { SpeakeasyBase } from "../../../internal/utils";
import { Action } from "./action";
import { Certificate } from "./certificate";
import { ProtocolEnumEnum } from "./protocolenumenum";
import { Tag } from "./tag";
export declare class CreateListenerInput extends SpeakeasyBase {
    alpnPolicy?: string[];
    certificates?: Certificate[];
    defaultActions: Action[];
    loadBalancerArn: string;
    port?: number;
    protocol?: ProtocolEnumEnum;
    sslPolicy?: string;
    tags?: Tag[];
}
