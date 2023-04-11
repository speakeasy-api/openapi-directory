import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdCollectiveDecisionSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'
 */
export declare enum PostSpacesIdCollectiveDecisionRequestBodyEventEnum {
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
export declare enum PostSpacesIdCollectiveDecisionRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * CollectiveDecision to add
 */
export declare class PostSpacesIdCollectiveDecisionRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    date: string;
    dividendDistributions?: number;
    dividendDistributionsDate?: string;
    /**
     * for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'
     */
    event: PostSpacesIdCollectiveDecisionRequestBodyEventEnum;
    home?: boolean;
    keywords?: string[];
    level?: PostSpacesIdCollectiveDecisionRequestBodyLevelEnum;
}
export declare class PostSpacesIdCollectiveDecisionRequest extends SpeakeasyBase {
    /**
     * CollectiveDecision to add
     */
    requestBody: PostSpacesIdCollectiveDecisionRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Id of the collective decision created
 */
export declare class PostSpacesIdCollectiveDecision201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdCollectiveDecisionResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the collective decision created
     */
    postSpacesIdCollectiveDecision201ApplicationJSONObject?: PostSpacesIdCollectiveDecision201ApplicationJSON;
}
