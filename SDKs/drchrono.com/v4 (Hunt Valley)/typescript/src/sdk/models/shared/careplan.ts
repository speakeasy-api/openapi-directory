import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CarePlanPlanTypeEnum {
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4",
    Five = "5",
    Six = "6"
}


export class CarePlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=code_system" })
  codeSystem?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=instructions" })
  instructions?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: string;

  @SpeakeasyMetadata({ data: "json, name=plan_type" })
  planType?: CarePlanPlanTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduled_date" })
  scheduledDate?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
