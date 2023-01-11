import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeezUpCommonLovLink3 } from "./beezupcommonlovlink3";



export class CustomerIndexLovLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeOfferLov" })
  activeOfferLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=beezUPTimeZoneLov" })
  beezUPTimeZoneLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=contractTerminationReasonLov" })
  contractTerminationReasonLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=countryLov" })
  countryLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=customerStatusLov" })
  customerStatusLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=invoicePaymentStatusLov" })
  invoicePaymentStatusLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=offerLov" })
  offerLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=storeCountryLov" })
  storeCountryLov?: BeezUpCommonLovLink3;

  @SpeakeasyMetadata({ data: "json, name=storeSectorLov" })
  storeSectorLov?: BeezUpCommonLovLink3;
}
