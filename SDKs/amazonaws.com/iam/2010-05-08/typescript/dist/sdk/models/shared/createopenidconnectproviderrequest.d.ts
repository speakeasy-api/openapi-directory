import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateOpenIDConnectProviderRequest extends SpeakeasyBase {
    clientIDList?: string[];
    tags?: Tag[];
    thumbprintList: string[];
    url: string;
}
