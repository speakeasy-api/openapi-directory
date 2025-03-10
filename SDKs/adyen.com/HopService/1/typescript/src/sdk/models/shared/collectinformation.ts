/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class CollectInformation extends SpeakeasyBase {
  /**
   * Indicates whether [bank account details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/bank-account-check) must be collected. Default is **true**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "bankDetails" })
  bankDetails?: boolean;

  /**
   * Indicates whether [business details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/company-check) must be collected. Default is **true**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "businessDetails" })
  businessDetails?: boolean;

  /**
   * Indicates whether [individual details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Default is **true**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "individualDetails" })
  individualDetails?: boolean;

  /**
   * Indicates whether [legal arrangement details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/legal-arrangements) must be collected. Default is **true**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "legalArrangementDetails" })
  legalArrangementDetails?: boolean;

  /**
   * Indicates whether answers to a [PCI questionnaire](https://docs.adyen.com/marketplaces-and-platforms/classic/platforms-for-partners#onboard-partner-platform) must be collected. Applies only to partner platforms. Default is **true**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "pciQuestionnaire" })
  pciQuestionnaire?: boolean;

  /**
   * Indicates whether [shareholder details](https://docs.adyen.com/marketplaces-and-platforms/classic/verification-checks/identity-check) must be collected. Defaults to **true**.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "shareholderDetails" })
  shareholderDetails?: boolean;
}
