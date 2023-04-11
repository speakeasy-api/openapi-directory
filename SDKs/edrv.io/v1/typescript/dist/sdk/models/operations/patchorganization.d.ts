import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchOrganizationRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    streetAndNumber?: string;
}
export declare class PatchOrganizationRequestBodyChannels extends SpeakeasyBase {
    slack?: Record<string, any>;
    telegram?: Record<string, any>;
}
export declare class PatchOrganizationRequestBodyConfigurations extends SpeakeasyBase {
    basicAuthEnabled?: boolean;
    basicAuthPassword?: boolean;
}
export declare class PatchOrganizationRequestBodyLinks extends SpeakeasyBase {
    about?: string;
    contact?: string;
    privacy?: string;
    support?: string;
}
export declare class PatchOrganizationRequestBodySupportChat extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PatchOrganizationRequestBodySupport extends SpeakeasyBase {
    businessHours?: string;
    chat?: PatchOrganizationRequestBodySupportChat;
    contactNumber?: string;
    email?: string;
}
export declare class PatchOrganizationRequestBodySupportChat1 extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class PatchOrganizationRequestBodyThemeColors extends SpeakeasyBase {
    primary?: string;
    secondary?: string;
}
export declare class PatchOrganizationRequestBodyTheme extends SpeakeasyBase {
    colors?: PatchOrganizationRequestBodyThemeColors;
}
/**
 * Include organization properties to create here
 */
export declare class PatchOrganizationRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PatchOrganizationRequestBodyAddress;
    channels?: PatchOrganizationRequestBodyChannels;
    configurations?: PatchOrganizationRequestBodyConfigurations;
    links?: PatchOrganizationRequestBodyLinks;
    locations?: any[];
    logo?: string;
    name?: string;
    otp?: string;
    stripeConnectedAccountId?: string;
    stripeCountry?: string;
    stripeCurrency?: string;
    stripeReserveAmount?: number;
    support?: PatchOrganizationRequestBodySupport;
    supportChat?: PatchOrganizationRequestBodySupportChat1;
    theme?: PatchOrganizationRequestBodyTheme;
}
export declare class PatchOrganizationRequest extends SpeakeasyBase {
    /**
     * Include organization properties to create here
     */
    requestBody: PatchOrganizationRequestBody;
    /**
     * ID of organization that needs to be updated
     */
    id: string;
}
export declare class PatchOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
