import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost } from "./onealmaws1v11tasklists1rs1lendingrequestsgetresponses200contentapplication1jsonschemapropertiesuserresourcesharingrequestitemspropertiesshippingcost";



// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType
/** 
 * Type of the requested resource. For example, book or article. Mandatory for borrowing requests. Mandatory when creating a lending request unless mms_id is supplied. For borrowing requests, possible codes are listed in 'PhysicalReadingListCitationTypes' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BK / CR. For lending requests, possible codes are listed in PR_CitationType [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API): BOOK / JOURNAL.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus
/** 
 * The copyright status of the request. Relevant if requested format is Digital, and 'rs_borrower_copyright_management' in customer parameters is true. Possible options are listed in 'ResourceSharingCopyrightsStatus' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request. Relevant for GET, POST and PUT of borrowing requests, and GET of lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat
/** 
 * Format of the resource requested. For example, physical or digital. Mandatory. Possible codes are listed in RequestFormats [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund
/** 
 * The code of the fund. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService
/** 
 * The code of the resource sharing request Level of Service. Possible options are listed in 'LevelOfService' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API), default is generated per request.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner
/** 
 * The code of the partner related to this request. See [Get partners API](https://developers.exlibrisgroup.com/alma/apis/partners/GET/gwPcGly021piAVNPLaef7suP1zfa6Lui/8883ef41-c3b8-4792-9ff8-cb6b729d6e07). Mandatory when creating a lending request.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation
/** 
 * The pickup library code where the resource will be delivered. Relevant and mandatory for physical format delivery Borrowing request. Optional for digital format. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod
/** 
 * Preferred send method. Possible options are listed in 'ResourceSharingRequestSendMethod' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Currently not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom
/** 
 * The code of the reading room where the item will be picked up. Mandatory when for_reading_room_only is true. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage
/** 
 * The requested language for the resource sharing request. Possible codes are the enabled fields in ResourceSharingLanguages [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Default is null.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester
/** 
 * The primary identifier and full name of the requesting user. Relevant for borrowing requests. Not relevant for lending requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote
/** 
 * Specific related note.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote extends SpeakeasyBase {
  @SpeakeasyMetadata()
  content?: string;

  @SpeakeasyMetadata()
  createdBy?: string;

  @SpeakeasyMetadata()
  createdDate?: Date;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency
/** 
 * The currency. Possible values are listed in 'Currency_CT' [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost extends SpeakeasyBase {
  @SpeakeasyMetadata()
  currency: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCostCurrency;

  @SpeakeasyMetadata()
  sum: number;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus
/** 
 * The resource sharing request status. Borrowing request: Possible codes are listed in MandatoryBorrowingWorkflowSteps or OptionalBorrowingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Lending request: Possible codes are listed in MandatoryLendingWorkflowSteps or OptionalLendingWorkflowSteps [code tables](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat
/** 
 * Format of the supplied item. For example, physical or digital. Possible codes are listed in RequestFormats [code table](https://developers.exlibrisgroup.com/blog/Working-with-the-code-tables-API). Relevant only after the request is supplied.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat extends SpeakeasyBase {
  @SpeakeasyMetadata()
  desc?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest
/** 
 * The request linked to the resource sharing request. Borrowing requests: this is the related user request. Lending requests: this is the move/digitization request (if exists). See [GET user's request API](https://developers.exlibrisgroup.com/alma/apis/users/GET/gwPcGly021r0XQMGAttqcPPFoLNxBoEZbQsUC/MWTX7aNWi0EYKYFUfYyI8KvpG73JPdiJpJhUA=/0aa8d36f-53d6-48ff-8996-485b90b103e4).
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  value?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest
/** 
 * Resource sharing request Object.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  additionalBarcode?: string[];

  @SpeakeasyMetadata()
  additionalPersonName?: string;

  @SpeakeasyMetadata()
  agreeToCopyrightTerms?: boolean;

  @SpeakeasyMetadata()
  allowOtherFormats?: boolean;

  @SpeakeasyMetadata()
  author?: string;

  @SpeakeasyMetadata()
  authorInitials?: string;

  @SpeakeasyMetadata()
  barcode?: string;

  @SpeakeasyMetadata()
  bibNote?: string;

  @SpeakeasyMetadata()
  callNumber?: string;

  @SpeakeasyMetadata()
  chapter?: string;

  @SpeakeasyMetadata()
  chapterAuthor?: string;

  @SpeakeasyMetadata()
  chapterTitle?: string;

  @SpeakeasyMetadata()
  citationType?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCitationType;

  @SpeakeasyMetadata()
  copyrightStatus?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestCopyrightStatus;

  @SpeakeasyMetadata()
  createdDate?: Date;

  @SpeakeasyMetadata()
  createdTime?: Date;

  @SpeakeasyMetadata()
  doi?: string;

  @SpeakeasyMetadata()
  edition?: string;

  @SpeakeasyMetadata()
  editor?: string;

  @SpeakeasyMetadata()
  endPage?: string;

  @SpeakeasyMetadata()
  externalId?: string;

  @SpeakeasyMetadata()
  format?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFormat;

  @SpeakeasyMetadata()
  fund?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestFund;

  @SpeakeasyMetadata()
  hasActiveNotes?: boolean;

  @SpeakeasyMetadata()
  isbn?: string;

  @SpeakeasyMetadata()
  issn?: string;

  @SpeakeasyMetadata()
  issue?: string;

  @SpeakeasyMetadata()
  journalTitle?: string;

  @SpeakeasyMetadata()
  lastInterestDate?: Date;

  @SpeakeasyMetadata()
  lastModifiedDate?: Date;

  @SpeakeasyMetadata()
  lastModifiedTime?: Date;

  @SpeakeasyMetadata()
  lccNumber?: string;

  @SpeakeasyMetadata()
  levelOfService?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestLevelOfService;

  @SpeakeasyMetadata()
  lostDamagedFee?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata()
  maximumFee?: number;

  @SpeakeasyMetadata()
  mmsId?: string;

  @SpeakeasyMetadata()
  needPatronInfo?: boolean;

  @SpeakeasyMetadata()
  note?: string;

  @SpeakeasyMetadata()
  oclcNumber?: string;

  @SpeakeasyMetadata()
  otherStandardId?: string;

  @SpeakeasyMetadata()
  owner?: string;

  @SpeakeasyMetadata()
  pages?: string;

  @SpeakeasyMetadata()
  part?: string;

  @SpeakeasyMetadata()
  partner?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPartner;

  @SpeakeasyMetadata()
  pickupLocation?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPickupLocation;

  @SpeakeasyMetadata()
  pickupLocationType?: string;

  @SpeakeasyMetadata()
  placeOfPublication?: string;

  @SpeakeasyMetadata()
  pmid?: string;

  @SpeakeasyMetadata()
  preferredSendMethod?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestPreferredSendMethod;

  @SpeakeasyMetadata()
  printed?: boolean;

  @SpeakeasyMetadata()
  publisher?: string;

  @SpeakeasyMetadata()
  readingRoom?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestReadingRoom;

  @SpeakeasyMetadata()
  receiveCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata()
  remoteRecordId?: string;

  @SpeakeasyMetadata()
  reported?: boolean;

  @SpeakeasyMetadata()
  requestCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaPropertiesUserResourceSharingRequestItemsPropertiesShippingCost;

  @SpeakeasyMetadata()
  requestId?: string;

  @SpeakeasyMetadata()
  requestedLanguage?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequestedLanguage;

  @SpeakeasyMetadata()
  requestedMedia?: string;

  @SpeakeasyMetadata()
  requester?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRequester;

  @SpeakeasyMetadata({ elemType: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote })
  rsNote?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestRsNote[];

  @SpeakeasyMetadata()
  seriesTitleNumber?: string;

  @SpeakeasyMetadata()
  shippingCost?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestShippingCost;

  @SpeakeasyMetadata()
  source?: string;

  @SpeakeasyMetadata()
  specificEdition?: boolean;

  @SpeakeasyMetadata()
  startPage?: string;

  @SpeakeasyMetadata()
  status?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestStatus;

  @SpeakeasyMetadata()
  suppliedFormat?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestSuppliedFormat;

  @SpeakeasyMetadata()
  textEmail?: string;

  @SpeakeasyMetadata()
  textPostal1?: string;

  @SpeakeasyMetadata()
  textPostal2?: string;

  @SpeakeasyMetadata()
  textPostal3?: string;

  @SpeakeasyMetadata()
  textPostal4?: string;

  @SpeakeasyMetadata()
  title?: string;

  @SpeakeasyMetadata()
  useAlternativeAddress?: boolean;

  @SpeakeasyMetadata()
  userRequest?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequestUserRequest;

  @SpeakeasyMetadata()
  volume?: string;

  @SpeakeasyMetadata()
  willingToPay?: boolean;

  @SpeakeasyMetadata()
  year?: string;
}


// Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema
/** 
 * A list of resource sharing requests.
**/
export class Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchema extends SpeakeasyBase {
  @SpeakeasyMetadata()
  totalRecordCount?: number;

  @SpeakeasyMetadata({ elemType: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest })
  userResourceSharingRequest?: Onealmaws1v11taskLists1rs1lendingRequestsGetResponses200ContentApplication1jsonSchemaUserResourceSharingRequest[];
}
