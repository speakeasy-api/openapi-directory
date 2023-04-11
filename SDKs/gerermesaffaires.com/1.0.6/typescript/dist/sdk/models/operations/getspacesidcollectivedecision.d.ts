import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * If true returns only invoices with a CompanyRegistrationCertificate
 */
export declare enum GetSpacesIdCollectiveDecisionHasCompanyRegistrationCertificateEnum {
    True = "true",
    False = "false"
}
/**
 * If true returns only invoices with Minutes
 */
export declare enum GetSpacesIdCollectiveDecisionHasMinutesEnum {
    True = "true",
    False = "false"
}
/**
 * If true returns only invoices with a SireneRegister
 */
export declare enum GetSpacesIdCollectiveDecisionHasSireneRegisterEnum {
    True = "true",
    False = "false"
}
/**
 * If true returns only invoices with a Status
 */
export declare enum GetSpacesIdCollectiveDecisionHasStatusEnum {
    True = "true",
    False = "false"
}
export declare class GetSpacesIdCollectiveDecisionRequest extends SpeakeasyBase {
    /**
     * Date of the collective decision YYYMMDD
     */
    date?: string;
    /**
     * Event of the collective decision (see post for the list of events)
     */
    event?: string;
    /**
     * If true returns only invoices with a CompanyRegistrationCertificate
     */
    hasCompanyRegistrationCertificate?: GetSpacesIdCollectiveDecisionHasCompanyRegistrationCertificateEnum;
    /**
     * If true returns only invoices with Minutes
     */
    hasMinutes?: GetSpacesIdCollectiveDecisionHasMinutesEnum;
    /**
     * If true returns only invoices with a SireneRegister
     */
    hasSireneRegister?: GetSpacesIdCollectiveDecisionHasSireneRegisterEnum;
    /**
     * If true returns only invoices with a Status
     */
    hasStatus?: GetSpacesIdCollectiveDecisionHasStatusEnum;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare enum GetSpacesIdCollectiveDecision200ApplicationJSONEventEnum {
    Egm = "EGM",
    Cgm = "CGM",
    Ogm = "OGM",
    ConstituentAssembly = "ConstituentAssembly",
    SolePartner = "SolePartner",
    OtherEvent = "OtherEvent",
    Other = "Other",
    Office = "Office",
    ExecutiveCommittee = "ExecutiveCommittee",
    Consulting = "Consulting",
    Board = "Board",
    PartnersMeeting = "PartnersMeeting"
}
export declare enum GetSpacesIdCollectiveDecision200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class GetSpacesIdCollectiveDecision200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    date?: string;
    dividendDistributions?: number;
    dividendDistributionsDate?: string;
    event?: GetSpacesIdCollectiveDecision200ApplicationJSONEventEnum;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesIdCollectiveDecision200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
}
export declare class GetSpacesIdCollectiveDecisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of collective decisions
     */
    getSpacesIdCollectiveDecision200ApplicationJSONAnies?: GetSpacesIdCollectiveDecision200ApplicationJSON[];
}
