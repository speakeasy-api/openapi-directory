import { SpeakeasyBase } from "../../../internal/utils";
import { Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost } from "./onealmaws1v11tasklists1rs1lendingrequestsgetresponses200contentapplication1jsonschemapropertiesuserresourcesharingrequestitemspropertiesshippingcost";
/**
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the fund. Not relevant for lending requests.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Specific related note.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote extends SpeakeasyBase {
    content?: string;
    createdBy?: string;
    createdDate?: Date;
}
/**
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost extends SpeakeasyBase {
    currency: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency;
    sum: number;
}
/**
 * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Resource sharing request Object.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest extends SpeakeasyBase {
    additionalBarcode?: string[];
    additionalPersonName?: string;
    agreeToCopyrightTerms?: boolean;
    allowOtherFormats?: boolean;
    author?: string;
    authorInitials?: string;
    barcode?: string;
    bibNote?: string;
    callNumber?: string;
    chapter?: string;
    chapterAuthor?: string;
    chapterTitle?: string;
    citationType?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType;
    copyrightStatus?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus;
    createdDate?: Date;
    createdTime?: Date;
    doi?: string;
    edition?: string;
    editor?: string;
    endPage?: string;
    externalId?: string;
    format?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat;
    fund?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund;
    hasActiveNotes?: boolean;
    isbn?: string;
    issn?: string;
    issue?: string;
    journalTitle?: string;
    lastInterestDate?: Date;
    lastModifiedDate?: Date;
    lastModifiedTime?: Date;
    lccNumber?: string;
    levelOfService?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService;
    lostDamagedFee?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;
    maximumFee?: number;
    mmsId?: string;
    needPatronInfo?: boolean;
    note?: string;
    oclcNumber?: string;
    otherStandardId?: string;
    owner?: string;
    pages?: string;
    part?: string;
    partner?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner;
    pickupLocation?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation;
    pickupLocationType?: string;
    placeOfPublication?: string;
    pmid?: string;
    preferredSendMethod?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod;
    printed?: boolean;
    publisher?: string;
    readingRoom?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom;
    receiveCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;
    remoteRecordId?: string;
    reported?: boolean;
    requestCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;
    requestId?: string;
    requestedLanguage?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage;
    requestedMedia?: string;
    requester?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester;
    rsNote?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote[];
    seriesTitleNumber?: string;
    shippingCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost;
    source?: string;
    specificEdition?: boolean;
    startPage?: string;
    status?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus;
    suppliedFormat?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat;
    textEmail?: string;
    textPostal1?: string;
    textPostal2?: string;
    textPostal3?: string;
    textPostal4?: string;
    title?: string;
    useAlternativeAddress?: boolean;
    userRequest?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest;
    volume?: string;
    willingToPay?: boolean;
    year?: string;
}
/**
 * A list of resource sharing requests.
**/
export declare class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
    totalRecordCount?: number;
    userResourceSharingRequest?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest[];
}
