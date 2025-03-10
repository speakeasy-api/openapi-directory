/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Transform, Type } from "class-transformer";

export class GetAlmawsV1TaskListsRsLendingRequestsRequest extends SpeakeasyBase {
  /**
   * The resource sharing library for which lending requests should be retrieved. Mandatory. List of possible libraries can be retrieved using the [GET /almaws/v1/conf/libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=library",
  })
  library?: string;

  /**
   * The partner value. Only lending requests from this partner should be retrieved. Optional. List of possible partners can be retrieved using the [GET almaws/v1/partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=partner",
  })
  partner?: string;

  /**
   * The 'printed' value of lending requests to retrieve. Optional. Possible values: Y, N.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=printed",
  })
  printed?: string;

  /**
   * The 'reported' value of lending requests to retrieve. Optional. Possible values: Y, N.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=reported",
  })
  reported?: string;

  /**
   * Requested format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=requested_format",
  })
  requestedFormat?: string;

  /**
   * The status of lending requests to retrieve. Optional. List of possible statuses can be retrieved using the [GET almaws/v1/conf/code-tables/MandatoryLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed) and the  [GET almaws/v1/conf/code-tables/OptionalLendingWorkflowSteps API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: string;

  /**
   * Supplied Format of the resource. Optional. List of possible formats can be retrieved using the [GET almaws/v1/conf/code-tables/RequestFormats API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4K7cQ0vuYHLS4NSgDGmcRpRYqx5hIMRTng9SIKO5Vof+/37088dc9-c685-4641-bc7f-60b5ca7cabed).
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=supplied_format",
  })
  suppliedFormat?: string;
}

/**
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The code of the fund. Not relevant for lending requests.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * Specific related note.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote extends SpeakeasyBase {
  /**
   * The note's text. Mandatory.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "content" })
  content?: string;

  /**
   * The creator of the note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_by" })
  createdBy?: string;

  /**
   * The creation date of the note. Default is the current date.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;
}

/**
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost extends SpeakeasyBase {
  /**
   * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "currency" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency
  )
  currency: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCostCurrency;

  /**
   * The total sum.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sum" })
  sum: number;
}

/**
 * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "desc" })
  desc?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "link" })
  link?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "value" })
  value?: string;
}

/**
 * Resource sharing request Object.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest extends SpeakeasyBase {
  /**
   * List of additional barcodes. Note that the first one appears in the main barcode field.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additional_barcode" })
  additionalBarcode?: string[];

  /**
   * The name of an additional contact.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "additional_person_name" })
  additionalPersonName?: string;

  /**
   * Indication whether the requester has agreed to the copyright terms. Mandatory for borrowing requests. Currently not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "agree_to_copyright_terms" })
  agreeToCopyrightTerms?: boolean;

  /**
   * Indication whether other formats besides the value in format field are acceptable. Default is false.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "allow_other_formats" })
  allowOtherFormats?: boolean;

  /**
   * Author of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "author" })
  author?: string;

  /**
   * Author initials of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "author_initials" })
  authorInitials?: string;

  /**
   * Barcode of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "barcode" })
  barcode?: string;

  /**
   * The note of the bibliographic record.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bib_note" })
  bibNote?: string;

  /**
   * The call number of the book. Indicates the library shelf on which the books are located.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "call_number" })
  callNumber?: string;

  /**
   * The chapter number in the journal that contains the article.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "chapter" })
  chapter?: string;

  /**
   * For a book chapter, the author of this chapter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "chapter_author" })
  chapterAuthor?: string;

  /**
   * For a book chapter, the title of this chapter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "chapter_title" })
  chapterTitle?: string;

  /**
   * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "citation_type" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType
  )
  citationType?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCitationType;

  /**
   * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "copyright_status" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus
  )
  copyrightStatus?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestCopyrightStatus;

  /**
   * The request creation date.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdDate?: Date;

  /**
   * The request creation time.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "created_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  createdTime?: Date;

  /**
   * The doi of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "doi" })
  doi?: string;

  /**
   * The edition of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "edition" })
  edition?: string;

  /**
   * The editor of the book (typically used for books where chapters have different authors).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "editor" })
  editor?: string;

  /**
   * The end page of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "end_page" })
  endPage?: string;

  /**
   * External identifier of the resource sharing request. Mandatory when creating a lending request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "external_id" })
  externalId?: string;

  /**
   * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "format" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat
  )
  format?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFormat;

  /**
   * The code of the fund. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "fund" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund
  )
  fund?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestFund;

  /**
   * Indication whether the request has active notes. Output parameter.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "has_active_notes" })
  hasActiveNotes?: boolean;

  /**
   * ISBN of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "isbn" })
  isbn?: string;

  /**
   * ISSN of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issn" })
  issn?: string;

  /**
   * The issue of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "issue" })
  issue?: string;

  /**
   * The title of the journal. Relevant when an article is requested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "journal_title" })
  journalTitle?: string;

  /**
   * Last date the request is needed. Optional.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_interest_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastInterestDate?: Date;

  /**
   * Date by which the last change to the request was made.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_modified_date" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastModifiedDate?: Date;

  /**
   * Time by which the last change to the request was made.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_modified_time" })
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  lastModifiedTime?: Date;

  /**
   * The library of congress number of the book.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "lcc_number" })
  lccNumber?: string;

  /**
   * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "level_of_service" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService
  )
  levelOfService?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestLevelOfService;

  @SpeakeasyMetadata()
  @Expose({ name: "lost_damaged_fee" })
  @Type(
    () =>
      shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost
  )
  lostDamagedFee?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  /**
   * Maximum fee the user is willing to pay for the request. Currently not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maximum_fee" })
  maximumFee?: number;

  /**
   * MMS ID of the requested resource. Borrowing request: this is relevant after physical material has arrived. Lending request: if supplied when creating a request, the request will be attached to this bib record. See [GET BIB API](https://developers.exlibrisgroup.com/alma/apis/bibs/GET/gwPcGly021om4RTvtjbPleCklCGxeYAf3JPdiJpJhUA=/af2fb69d-64f4-42bc-bb05-d8a0ae56936e).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "mms_id" })
  mmsId?: string;

  /**
   * Indication whether patron information is needed. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "need_patron_info" })
  needPatronInfo?: boolean;

  /**
   * General note.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "note" })
  note?: string;

  /**
   * The oclc number of the book.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "oclc_number" })
  oclcNumber?: string;

  /**
   * The other standard id of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "other_standard_id" })
  otherStandardId?: string;

  /**
   * The resource sharing library code. See [Get libraries API](https://developers.exlibrisgroup.com/alma/apis/conf/GET/gwPcGly021p29HpB7XTI4Dp4I8TKv6CAxBlD4LyRaVE=/37088dc9-c685-4641-bc7f-60b5ca7cabed). Borrowing request: Optional. Used only when there are more than one resource sharing library defined for the user. Lending request: Mandatory.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "owner" })
  owner?: string;

  /**
   * The relevant pages of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pages" })
  pages?: string;

  /**
   * The part of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "part" })
  part?: string;

  /**
   * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "partner" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner
  )
  partner?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPartner;

  /**
   * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pickup_location" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation
  )
  pickupLocation?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPickupLocation;

  /**
   * The pickup location type. The pickup location type. Possible values are: LIBRARY, CIRCULATION_DESK.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pickup_location_type" })
  pickupLocationType?: string;

  /**
   * The publication place of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "place_of_publication" })
  placeOfPublication?: string;

  /**
   * The pmid of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pmid" })
  pmid?: string;

  /**
   * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "preferred_send_method" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod
  )
  preferredSendMethod?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestPreferredSendMethod;

  /**
   * Indication whether the request is printed. Output parameter. Relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "printed" })
  printed?: boolean;

  /**
   * Publisher of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "publisher" })
  publisher?: string;

  /**
   * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reading_room" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom
  )
  readingRoom?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestReadingRoom;

  @SpeakeasyMetadata()
  @Expose({ name: "receive_cost" })
  @Type(
    () =>
      shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost
  )
  receiveCost?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  /**
   * The remote record id of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "remote_record_id" })
  remoteRecordId?: string;

  /**
   * Indication whether the request is reported. Output parameter. Relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "reported" })
  reported?: boolean;

  @SpeakeasyMetadata()
  @Expose({ name: "request_cost" })
  @Type(
    () =>
      shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost
  )
  requestCost?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  /**
   * Internal identifier of the resource sharing request in Alma, generated by Alma. Should be used in subsequent queries regarding the request.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "request_id" })
  requestId?: string;

  /**
   * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requested_language" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage
  )
  requestedLanguage?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequestedLanguage;

  /**
   * A description of the requested media. possible values are 1-7 (codes from request media code table), and the codes from 'AdditionalRequestedMedia' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). The valid values are according to the Requested media definition mapping table.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requested_media" })
  requestedMedia?: string;

  /**
   * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "requester" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester
  )
  requester?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRequester;

  /**
   * List of related notes that appear in the Notes tab in the UI..
   */
  @SpeakeasyMetadata({
    elemType:
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote,
  })
  @Expose({ name: "rs_note" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote
  )
  rsNote?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestRsNote[];

  /**
   * The series title number of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "series_title_number" })
  seriesTitleNumber?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "shipping_cost" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost
  )
  shippingCost?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestShippingCost;

  /**
   * The source of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "source" })
  source?: string;

  /**
   * Indication whether edition is used in ISO Protocol and in Locate process. Default is true. Relevant when a book is requested.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "specific_edition" })
  specificEdition?: boolean;

  /**
   * The relevant start page of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "start_page" })
  startPage?: string;

  /**
   * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "status" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus
  )
  status?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestStatus;

  /**
   * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "supplied_format" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat
  )
  suppliedFormat?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestSuppliedFormat;

  /**
   * Borrowing request: In use with alternative_address only. In use when sending in digital format. Lending request: Requester's Email.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text_email" })
  textEmail?: string;

  /**
   * In use with alternative_address only. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text_postal_1" })
  textPostal1?: string;

  /**
   * In use with alternative_address only. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text_postal_2" })
  textPostal2?: string;

  /**
   * In use with alternative_address only. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text_postal_3" })
  textPostal3?: string;

  /**
   * In use with alternative_address only. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "text_postal_4" })
  textPostal4?: string;

  /**
   * Title of the requested resource. Mandatory unless mms_id is supplied.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;

  /**
   * An indication of whether the delivery should be to an alternative address. Default is false. Not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "use_alternative_address" })
  useAlternativeAddress?: boolean;

  /**
   * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "user_request" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest
  )
  userRequest?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequestUserRequest;

  /**
   * The volume number of the journal that contains the article.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "volume" })
  volume?: string;

  /**
   * Indication whether patron is willing to pay. Currently not relevant for lending requests.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "willing_to_pay" })
  willingToPay?: boolean;

  /**
   * Publication date of the requested resource.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "year" })
  year?: string;
}

/**
 * A list of resource sharing requests.
 */
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON extends SpeakeasyBase {
  /**
   * The total number of resource sharing requests in the given list.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "total_record_count" })
  totalRecordCount?: number;

  /**
   * UserResourceSharingRequest object.
   */
  @SpeakeasyMetadata({
    elemType:
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest,
  })
  @Expose({ name: "user_resource_sharing_request" })
  @Type(
    () =>
      GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest
  )
  userResourceSharingRequest?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSONUserResourceSharingRequest[];
}

export class GetAlmawsV1TaskListsRsLendingRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * OK - This method returns an object based on rest_user_resource_sharing_requests.xsd. See [here](/alma/apis/docs/xsd/rest_user_resource_sharing_requests.xsd)
   */
  @SpeakeasyMetadata()
  getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJSON;
}
