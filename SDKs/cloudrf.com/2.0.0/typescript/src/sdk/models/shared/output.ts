import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OutputUnitsEnum {
    Metric = "metric",
    Imperial = "imperial"
}


export class Output extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ber" })
  ber?: number;

  @SpeakeasyMetadata({ data: "json, name=col" })
  col?: string;

  @SpeakeasyMetadata({ data: "json, name=mod" })
  mod?: number;

  @SpeakeasyMetadata({ data: "json, name=nf" })
  nf?: number;

  @SpeakeasyMetadata({ data: "json, name=out" })
  out?: number;

  @SpeakeasyMetadata({ data: "json, name=rad" })
  rad?: number;

  @SpeakeasyMetadata({ data: "json, name=res" })
  res?: number;

  @SpeakeasyMetadata({ data: "json, name=units" })
  units?: OutputUnitsEnum;
}
