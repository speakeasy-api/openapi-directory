import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LabResultAbnormalStatusEnum {
    L = "L",
    Ll = "LL",
    H = "H",
    Hh = "HH",
    LessThan = "<",
    GreaterThan = ">",
    A = "A",
    Aa = "AA",
    S = "S",
    R = "R",
    I = "I",
    Neg = "NEG",
    Pos = "POS",
    N = "N",
    Unknown = ""
}

export enum LabResultStatusEnum {
    P = "P",
    I = "I",
    C = "C",
    F = "F",
    X = "X"
}


export class LabResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abnormal_status" })
  abnormalStatus?: LabResultAbnormalStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=document" })
  document: number;

  @SpeakeasyMetadata({ data: "json, name=group_code" })
  groupCode?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_abnormal" })
  isAbnormal?: string;

  @SpeakeasyMetadata({ data: "json, name=lab_order" })
  labOrder?: string;

  @SpeakeasyMetadata({ data: "json, name=lab_test" })
  labTest: number;

  @SpeakeasyMetadata({ data: "json, name=normal_range" })
  normalRange?: string;

  @SpeakeasyMetadata({ data: "json, name=observation_code" })
  observationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=observation_description" })
  observationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=specimen_received" })
  specimenReceived?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: LabResultStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=test_performed" })
  testPerformed: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;

  @SpeakeasyMetadata({ data: "json, name=value_is_numeric" })
  valueIsNumeric?: boolean;
}
