import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost } from "./onealmaws1v11tasklists1rs1lendingrequestsgetresponses200contentapplication1jsonschemapropertiesuserresourcesharingrequestitemspropertiesshippingcost";



// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType
/** 
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus
/** 
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat
/** 
 * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund
/** 
 * The code of the fund. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService
/** 
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner
/** 
 * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation
/** 
 * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod
/** 
 * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom
/** 
 * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage
/** 
 * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester
/** 
 * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote
/** 
 * Specific related note.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: Date;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency
/** 
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCostCurrency;

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus
/** 
 * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat
/** 
 * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest
/** 
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems
/** 
 * Resource sharing request Object.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItems extends SpeakeasyBase {
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
  citationType?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCitationType;

  @SpeakeasyMetadata({ data: "json, name=copyright_status" })
  copyrightStatus?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsCopyrightStatus;

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
  format?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFormat;

  @SpeakeasyMetadata({ data: "json, name=fund" })
  fund?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsFund;

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
  levelOfService?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsLevelOfService;

  @SpeakeasyMetadata({ data: "json, name=lost_damaged_fee" })
  lostDamagedFee?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

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
  partner?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPartner;

  @SpeakeasyMetadata({ data: "json, name=pickup_location" })
  pickupLocation?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPickupLocation;

  @SpeakeasyMetadata({ data: "json, name=pickup_location_type" })
  pickupLocationType?: string;

  @SpeakeasyMetadata({ data: "json, name=place_of_publication" })
  placeOfPublication?: string;

  @SpeakeasyMetadata({ data: "json, name=pmid" })
  pmid?: string;

  @SpeakeasyMetadata({ data: "json, name=preferred_send_method" })
  preferredSendMethod?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPreferredSendMethod;

  @SpeakeasyMetadata({ data: "json, name=printed" })
  printed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publisher" })
  publisher?: string;

  @SpeakeasyMetadata({ data: "json, name=reading_room" })
  readingRoom?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsReadingRoom;

  @SpeakeasyMetadata({ data: "json, name=receive_cost" })
  receiveCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata({ data: "json, name=remote_record_id" })
  remoteRecordId?: string;

  @SpeakeasyMetadata({ data: "json, name=reported" })
  reported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=request_cost" })
  requestCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId?: string;

  @SpeakeasyMetadata({ data: "json, name=requested_language" })
  requestedLanguage?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequestedLanguage;

  @SpeakeasyMetadata({ data: "json, name=requested_media" })
  requestedMedia?: string;

  @SpeakeasyMetadata({ data: "json, name=requester" })
  requester?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRequester;

  @SpeakeasyMetadata({ data: "json, name=rs_note", elemType: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote })
  rsNote?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsRsNote[];

  @SpeakeasyMetadata({ data: "json, name=series_title_number" })
  seriesTitleNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_cost" })
  shippingCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsShippingCost;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=specific_edition" })
  specificEdition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=start_page" })
  startPage?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsStatus;

  @SpeakeasyMetadata({ data: "json, name=supplied_format" })
  suppliedFormat?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsSuppliedFormat;

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
  userRequest?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsUserRequest;

  @SpeakeasyMetadata({ data: "json, name=volume" })
  volume?: string;

  @SpeakeasyMetadata({ data: "json, name=willing_to_pay" })
  willingToPay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}
