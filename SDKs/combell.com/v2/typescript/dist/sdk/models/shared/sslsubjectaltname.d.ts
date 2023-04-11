import { SpeakeasyBase } from "../../../internal/utils";
import { SslSubjectAltNameTypeEnum } from "./sslsubjectaltnametypeenum";
export declare class SslSubjectAltName extends SpeakeasyBase {
    /**
     * The type of the alt name:
     *
     * @remarks
     * <ul><li>Dns</li><li>Ip</li></ul>
     */
    type?: SslSubjectAltNameTypeEnum;
    /**
     * The value of the alt name.
     */
    value?: string;
}
