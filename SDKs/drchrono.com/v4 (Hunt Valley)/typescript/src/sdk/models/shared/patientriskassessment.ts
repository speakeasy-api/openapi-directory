import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatientRiskAssessment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=code_system" })
  codeSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=effective_time" })
  effectiveTime?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=value_code" })
  valueCode?: string;

  @SpeakeasyMetadata({ data: "json, name=value_code_system" })
  valueCodeSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=value_name" })
  valueName?: string;
}
