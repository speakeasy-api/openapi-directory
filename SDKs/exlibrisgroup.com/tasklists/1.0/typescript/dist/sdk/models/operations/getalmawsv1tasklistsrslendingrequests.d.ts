import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAlmawsV1TaskListsRsLendingRequestsRequest extends SpeakeasyBase {
    /**
     * The resource sharing library for which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
     */
    library?: string;
    /**
     * The partner value. Only lending requests from this partner should be retrieved. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).
     */
    partner?: string;
    /**
     * The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.
     */
    printed?: string;
    /**
     * The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.
     */
    reported?: string;
    /**
     * Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
     */
    requestedFormat?: string;
    /**
     * The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed) and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
     */
    status?: string;
    /**
     * Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
     */
    suppliedFormat?: string;
}
/**
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the fund. Not relevant for lending requests.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Specific related note.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote extends SpeakeasyBase {
    /**
     * The note's text. Mandatory.
     */
    content?: string;
    /**
     * The creator of the note.
     */
    createdBy?: string;
    /**
     * The creation date of the note. Default is the current date.
     */
    createdDate?: Date;
}
/**
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost extends SpeakeasyBase {
    /**
     * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
     */
    currency: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency;
    /**
     * The total sum.
     */
    sum: number;
}
/**
 * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat extends SpeakeasyBase {
    desc?: string;
    value?: string;
}
/**
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest extends SpeakeasyBase {
    link?: string;
    value?: string;
}
/**
 * Resource sharing request Object.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest extends SpeakeasyBase {
    /**
     * List of additional barcodes. Note that the first one appears in the main barcode field.
     */
    additionalBarcode?: string[];
    /**
     * The name of an additional contact.
     */
    additionalPersonName?: string;
    /**
     * Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.
     */
    agreeToCopyrightTerms?: boolean;
    /**
     * Indication whether other formats besides the value in format field are acceptable. Default is false.
     */
    allowOtherFormats?: boolean;
    /**
     * Author of the requested resource.
     */
    author?: string;
    /**
     * Author initials of the requested resource.
     */
    authorInitials?: string;
    /**
     * Barcode of the requested resource.
     */
    barcode?: string;
    /**
     * The note of the bibliographic record.
     */
    bibNote?: string;
    /**
     * The call number of the book. Indicates the library shelf on which the books are located.
     */
    callNumber?: string;
    /**
     * The chapter number in the journal that contains the article.
     */
    chapter?: string;
    /**
     * For a book chapter, the author of this chapter.
     */
    chapterAuthor?: string;
    /**
     * For a book chapter, the title of this chapter.
     */
    chapterTitle?: string;
    /**
     * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
     */
    citationType?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType;
    /**
     * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
     */
    copyrightStatus?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus;
    /**
     * The request creation date.
     */
    createdDate?: Date;
    /**
     * The request creation time.
     */
    createdTime?: Date;
    /**
     * The doi of the requested resource.
     */
    doi?: string;
    /**
     * The edition of the requested resource.
     */
    edition?: string;
    /**
     * The editor of the book (typically used for books where chapters have different authors).
     */
    editor?: string;
    /**
     * The end page of the requested resource.
     */
    endPage?: string;
    /**
     * External identifier of the resource sharing request. Mandatory when creating a lending request.
     */
    externalId?: string;
    /**
     * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
     */
    format?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat;
    /**
     * The code of the fund. Not relevant for lending requests.
     */
    fund?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund;
    /**
     * Indication whether the request has active notes. Output parameter.
     */
    hasActiveNotes?: boolean;
    /**
     * ISBN of the requested resource.
     */
    isbn?: string;
    /**
     * ISSN of the requested resource.
     */
    issn?: string;
    /**
     * The issue of the requested resource.
     */
    issue?: string;
    /**
     * The title of the journal. Relevant when an article is requested.
     */
    journalTitle?: string;
    /**
     * Last date the request is needed. Optional.
     */
    lastInterestDate?: Date;
    /**
     * Date by which the last change to the request was made.
     */
    lastModifiedDate?: Date;
    /**
     * Time by which the last change to the request was made.
     */
    lastModifiedTime?: Date;
    /**
     * The library of congress number of the book.
     */
    lccNumber?: string;
    /**
     * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
     */
    levelOfService?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService;
    lostDamagedFee?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;
    /**
     * Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.
     */
    maximumFee?: number;
    /**
     * MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
     */
    mmsId?: string;
    /**
     * Indication whether patron information is needed. Not relevant for lending requests.
     */
    needPatronInfo?: boolean;
    /**
     * General note.
     */
    note?: string;
    /**
     * The oclc number of the book.
     */
    oclcNumber?: string;
    /**
     * The other standard id of the requested resource.
     */
    otherStandardId?: string;
    /**
     * The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.
     */
    owner?: string;
    /**
     * The relevant pages of the requested resource.
     */
    pages?: string;
    /**
     * The part of the requested resource.
     */
    part?: string;
    /**
     * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
     */
    partner?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner;
    /**
     * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
     */
    pickupLocation?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation;
    /**
     * The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.
     */
    pickupLocationType?: string;
    /**
     * The publication place of the requested resource.
     */
    placeOfPublication?: string;
    /**
     * The pmid of the requested resource.
     */
    pmid?: string;
    /**
     * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
     */
    preferredSendMethod?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod;
    /**
     * Indication whether the request is printed. Output parameter. Relevant for lending requests.
     */
    printed?: boolean;
    /**
     * Publisher of the requested resource.
     */
    publisher?: string;
    /**
     * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
     */
    readingRoom?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom;
    receiveCost?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;
    /**
     * The remote record id of the requested resource.
     */
    remoteRecordId?: string;
    /**
     * Indication whether the request is reported. Output parameter. Relevant for lending requests.
     */
    reported?: boolean;
    requestCost?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;
    /**
     * Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.
     */
    requestId?: string;
    /**
     * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
     */
    requestedLanguage?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage;
    /**
     * A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.
     */
    requestedMedia?: string;
    /**
     * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
     */
    requester?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester;
    /**
     * List of related notes that appear in the Notes tab in the UI..
     */
    rsNote?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote[];
    /**
     * The series title number of the requested resource.
     */
    seriesTitleNumber?: string;
    shippingCost?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost;
    /**
     * The source of the requested resource.
     */
    source?: string;
    /**
     * Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.
     */
    specificEdition?: boolean;
    /**
     * The relevant start page of the requested resource.
     */
    startPage?: string;
    /**
     * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
     */
    status?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus;
    /**
     * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
     */
    suppliedFormat?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat;
    /**
     * Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.
     */
    textEmail?: string;
    /**
     * In use with alternative_address only. Not relevant for lending requests.
     */
    textPostal1?: string;
    /**
     * In use with alternative_address only. Not relevant for lending requests.
     */
    textPostal2?: string;
    /**
     * In use with alternative_address only. Not relevant for lending requests.
     */
    textPostal3?: string;
    /**
     * In use with alternative_address only. Not relevant for lending requests.
     */
    textPostal4?: string;
    /**
     * Title of the requested resource. Mandatory unless mms_id is supplied.
     */
    title?: string;
    /**
     * An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.
     */
    useAlternativeAddress?: boolean;
    /**
     * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
     */
    userRequest?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest;
    /**
     * The volume number of the journal that contains the article.
     */
    volume?: string;
    /**
     * Indication whether patron is willing to pay. Currently not relevant for lending requests.
     */
    willingToPay?: boolean;
    /**
     * Publication date of the requested resource.
     */
    year?: string;
}
/**
 * A list of resource sharing requests.
 */
export declare class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON extends SpeakeasyBase {
    /**
     * The total number of resource sharing requests in the given list.
     */
    totalRecordCount?: number;
    /**
     * UserResourceSharingRequest object.
     */
    userResourceSharingRequest?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest[];
}
export declare class GetAlmawsV1TaskListsRsLendingRequestsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK - This method returns an object based on rest_user_resource_sharing_requests.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_requests.xsd)
     */
    getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON;
}
