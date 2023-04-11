import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionErrorCodeTypeEnum } from "./connectionerrorcodetypeenum";
import { ConnectionStateTypeEnum } from "./connectionstatetypeenum";
import { CustomKeyStoreTypeEnum } from "./customkeystoretypeenum";
import { XksProxyConfigurationType } from "./xksproxyconfigurationtype";
/**
 * Contains information about each custom key store in the custom key store list.
 */
export declare class CustomKeyStoresListEntry extends SpeakeasyBase {
    cloudHsmClusterId?: string;
    connectionErrorCode?: ConnectionErrorCodeTypeEnum;
    connectionState?: ConnectionStateTypeEnum;
    creationDate?: Date;
    customKeyStoreId?: string;
    customKeyStoreName?: string;
    customKeyStoreType?: CustomKeyStoreTypeEnum;
    trustAnchorCertificate?: string;
    xksProxyConfiguration?: XksProxyConfigurationType;
}
