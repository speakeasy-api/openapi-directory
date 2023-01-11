import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InventoryCategoryCategoryTypeEnum {
    Vaccine = "vaccine",
    Product = "product",
    Service = "service"
}


export class InventoryCategory extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=category_type" })
  categoryType?: InventoryCategoryCategoryTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
