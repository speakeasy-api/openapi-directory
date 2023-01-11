import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlmawsV1TaskListsRsLendingRequestsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=library" })
  library?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=partner" })
  partner?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=printed" })
  printed?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=reported" })
  reported?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requested_format" })
  requestedFormat?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=supplied_format" })
  suppliedFormat?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType
/** 
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus
/** 
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat
/** 
 * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund
/** 
 * The code of the fund. Not relevant for lending requests.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService
/** 
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner
/** 
 * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation
/** 
 * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod
/** 
 * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom
/** 
 * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage
/** 
 * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester
/** 
 * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote
/** 
 * Specific related note.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: Date;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency
/** 
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCostCurrency;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus
/** 
 * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat
/** 
 * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest
/** 
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest
/** 
 * Resource sharing request Object.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additional_barcode" })
  additionalBarcode?: string[];

  @SpeakeasyMetadata({ data: "json, name=additional_person_name" })
  additionalPersonName?: string;

  @SpeakeasyMetadata({ data: "json, name=agree_to_copyright_terms" })
  agreeToCopyrightTerms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allow_other_formats" })
  allowOtherFormats?: boolean;

  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=author_initials" })
  authorInitials?: string;

  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: string;

  @SpeakeasyMetadata({ data: "json, name=bib_note" })
  bibNote?: string;

  @SpeakeasyMetadata({ data: "json, name=call_number" })
  callNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=chapter" })
  chapter?: string;

  @SpeakeasyMetadata({ data: "json, name=chapter_author" })
  chapterAuthor?: string;

  @SpeakeasyMetadata({ data: "json, name=chapter_title" })
  chapterTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=citation_type" })
  citationType?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCitationType;

  @SpeakeasyMetadata({ data: "json, name=copyright_status" })
  copyrightStatus?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestCopyrightStatus;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=created_time" })
  createdTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=doi" })
  doi?: string;

  @SpeakeasyMetadata({ data: "json, name=edition" })
  edition?: string;

  @SpeakeasyMetadata({ data: "json, name=editor" })
  editor?: string;

  @SpeakeasyMetadata({ data: "json, name=end_page" })
  endPage?: string;

  @SpeakeasyMetadata({ data: "json, name=external_id" })
  externalId?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFormat;

  @SpeakeasyMetadata({ data: "json, name=fund" })
  fund?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestFund;

  @SpeakeasyMetadata({ data: "json, name=has_active_notes" })
  hasActiveNotes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isbn" })
  isbn?: string;

  @SpeakeasyMetadata({ data: "json, name=issn" })
  issn?: string;

  @SpeakeasyMetadata({ data: "json, name=issue" })
  issue?: string;

  @SpeakeasyMetadata({ data: "json, name=journal_title" })
  journalTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=last_interest_date" })
  lastInterestDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_modified_date" })
  lastModifiedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_modified_time" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=lcc_number" })
  lccNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=level_of_service" })
  levelOfService?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestLevelOfService;

  @SpeakeasyMetadata({ data: "json, name=lost_damaged_fee" })
  lostDamagedFee?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata({ data: "json, name=maximum_fee" })
  maximumFee?: number;

  @SpeakeasyMetadata({ data: "json, name=mms_id" })
  mmsId?: string;

  @SpeakeasyMetadata({ data: "json, name=need_patron_info" })
  needPatronInfo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=note" })
  note?: string;

  @SpeakeasyMetadata({ data: "json, name=oclc_number" })
  oclcNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=other_standard_id" })
  otherStandardId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: string;

  @SpeakeasyMetadata({ data: "json, name=part" })
  part?: string;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPartner;

  @SpeakeasyMetadata({ data: "json, name=pickup_location" })
  pickupLocation?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPickupLocation;

  @SpeakeasyMetadata({ data: "json, name=pickup_location_type" })
  pickupLocationType?: string;

  @SpeakeasyMetadata({ data: "json, name=place_of_publication" })
  placeOfPublication?: string;

  @SpeakeasyMetadata({ data: "json, name=pmid" })
  pmid?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_send_method" })
  preferredSendMethod?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestPreferredSendMethod;

  @SpeakeasyMetadata({ data: "json, name=printed" })
  printed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=reading_room" })
  readingRoom?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestReadingRoom;

  @SpeakeasyMetadata({ data: "json, name=receive_cost" })
  receiveCost?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata({ data: "json, name=remote_record_id" })
  remoteRecordId?: string;

  @SpeakeasyMetadata({ data: "json, name=reported" })
  reported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_cost" })
  requestCost?: shared.Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=requested_language" })
  requestedLanguage?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequestedLanguage;

  @SpeakeasyMetadata({ data: "json, name=requested_media" })
  requestedMedia?: string;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRequester;

  @SpeakeasyMetadata({ data: "json, name=rs_note", elemType: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote })
  rsNote?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestRsNote[];

  @SpeakeasyMetadata({ data: "json, name=series_title_number" })
  seriesTitleNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_cost" })
  shippingCost?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestShippingCost;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=specific_edition" })
  specificEdition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_page" })
  startPage?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestStatus;

  @SpeakeasyMetadata({ data: "json, name=supplied_format" })
  suppliedFormat?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestSuppliedFormat;

  @SpeakeasyMetadata({ data: "json, name=text_email" })
  textEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=text_postal_1" })
  textPostal1?: string;

  @SpeakeasyMetadata({ data: "json, name=text_postal_2" })
  textPostal2?: string;

  @SpeakeasyMetadata({ data: "json, name=text_postal_3" })
  textPostal3?: string;

  @SpeakeasyMetadata({ data: "json, name=text_postal_4" })
  textPostal4?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=use_alternative_address" })
  useAlternativeAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_request" })
  userRequest?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequestUserRequest;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: string;

  @SpeakeasyMetadata({ data: "json, name=willing_to_pay" })
  willingToPay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}


// GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson
/** 
 * A list of resource sharing requests.
**/
export class GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_record_count" })
  totalRecordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=user_resource_sharing_request", elemType: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest })
  userResourceSharingRequest?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJsonUserResourceSharingRequest[];
}


export class GetAlmawsV1TaskListsRsLendingRequestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAlmawsV1TaskListsRsLendingRequestsQueryParams;
}


export class GetAlmawsV1TaskListsRsLendingRequestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAlmawsV1TaskListsRsLendingRequests200ApplicationJSONObject?: GetAlmawsV1TaskListsRsLendingRequests200ApplicationJson;
}
