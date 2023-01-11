import dataclasses
from enum import Enum

class PerformanceIndicatorTypeEnum(str, Enum):
    CLICK_COUNT = "ClickCount"
    COST = "Cost"
    ORDER_COUNT = "OrderCount"
    PRODUCT_COUNT = "ProductCount"
    SOLD_PRODUCT_COUNT = "SoldProductCount"
    DISABLED_PRODUCT_COUNT = "DisabledProductCount"
    ENABLED_PRODUCT_COUNT = "EnabledProductCount"
    TOTAL_SALES = "TotalSales"
    MARGIN = "Margin"
    ROI = "ROI"
    PERFORMANCE_INDICATOR = "PerformanceIndicator"

