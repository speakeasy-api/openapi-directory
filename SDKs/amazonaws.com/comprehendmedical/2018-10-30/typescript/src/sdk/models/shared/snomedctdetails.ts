/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 *  The information about the revision of the SNOMED-CT ontology in the response. Specifically, the details include the SNOMED-CT edition, language, and version date.
 */
export class SNOMEDCTDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Edition" })
  edition?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "Language" })
  language?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "VersionDate" })
  versionDate?: string;
}
