import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'
 */
export declare enum PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequestBodyEventEnum {
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
export declare enum PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequestBodyLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * Collective decision to modify (except name, class and archivaldate)
 */
export declare class PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequestBody extends SpeakeasyBase {
    about?: string;
    comment?: string;
    date?: string;
    dividendDistributions?: number;
    dividendDistributionsDate?: string;
    /**
     * for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'
     */
    event?: PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequestBodyEventEnum;
    home?: boolean;
    keywords?: string[];
    level?: PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequestBodyLevelEnum;
}
export declare class PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequest extends SpeakeasyBase {
    /**
     * Collective decision to modify (except name, class and archivaldate)
     */
    requestBody: PatchSpacesSpaceIdFoldersIdCollectiveDecisionRequestBody;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersIdCollectiveDecisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
