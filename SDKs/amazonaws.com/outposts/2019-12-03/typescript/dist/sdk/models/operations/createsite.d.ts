import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 *  Information about an address.
 */
export declare class CreateSiteRequestBodyOperatingAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    contactName?: string;
    contactPhoneNumber?: string;
    countryCode?: string;
    districtOrCounty?: string;
    municipality?: string;
    postalCode?: string;
    stateOrRegion?: string;
}
/**
 *  Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide.
 */
export declare class CreateSiteRequestBodyRackPhysicalProperties extends SpeakeasyBase {
    fiberOpticCableType?: shared.FiberOpticCableTypeEnum;
    maximumSupportedWeightLbs?: shared.MaximumSupportedWeightLbsEnum;
    opticalStandard?: shared.OpticalStandardEnum;
    powerConnector?: shared.PowerConnectorEnum;
    powerDrawKva?: shared.PowerDrawKvaEnum;
    powerFeedDrop?: shared.PowerFeedDropEnum;
    powerPhase?: shared.PowerPhaseEnum;
    uplinkCount?: shared.UplinkCountEnum;
    uplinkGbps?: shared.UplinkGbpsEnum;
}
/**
 *  Information about an address.
 */
export declare class CreateSiteRequestBodyShippingAddress extends SpeakeasyBase {
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    contactName?: string;
    contactPhoneNumber?: string;
    countryCode?: string;
    districtOrCounty?: string;
    municipality?: string;
    postalCode?: string;
    stateOrRegion?: string;
}
export declare class CreateSiteRequestBody extends SpeakeasyBase {
    /**
     * The description of the site.
     */
    description?: string;
    /**
     * The name of the site.
     */
    name: string;
    /**
     * Additional information that you provide about site access requirements, electrician scheduling, personal protective equipment, or regulation of equipment materials that could affect your installation process.
     */
    notes?: string;
    /**
     *  Information about an address.
     */
    operatingAddress?: CreateSiteRequestBodyOperatingAddress;
    /**
     *  Information about the physical and logistical details for racks at sites. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide.
     */
    rackPhysicalProperties?: CreateSiteRequestBodyRackPhysicalProperties;
    /**
     *  Information about an address.
     */
    shippingAddress?: CreateSiteRequestBodyShippingAddress;
    /**
     *  The tags to apply to a site.
     */
    tags?: Record<string, string>;
}
export declare class CreateSiteRequest extends SpeakeasyBase {
    requestBody: CreateSiteRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateSiteResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    createSiteOutput?: shared.CreateSiteOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
