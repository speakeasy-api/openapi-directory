import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyNameData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_name" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=department_code_and_type" })
  departmentCodeAndType?: string[];

  @SpeakeasyMetadata({ data: "json, name=entity_type" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=is_gstn_verified" })
  isGstnVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nature_of_business" })
  natureOfBusiness?: string[];

  @SpeakeasyMetadata({ data: "json, name=pincode" })
  pincode?: number;

  @SpeakeasyMetadata({ data: "json, name=registration_date" })
  registrationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=registration_type" })
  registrationType?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;
}
