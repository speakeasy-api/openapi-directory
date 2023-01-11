import dataclasses
from enum import Enum

class PerformanceIndicatorFormulaParameterTypeEnum(str, Enum):
    COST = "Cost"
    TOTAL_SALES = "TotalSales"
    MARGIN = "Margin"
    TOTAL_SALES_MINUS_COST = "TotalSalesMinusCost"
    MARGIN_MINUS_COST = "MarginMinusCost"
    ORDER_COUNT = "OrderCount"
    CLICK_COUNT = "ClickCount"
    SOLD_PRODUCT_COUNT = "SoldProductCount"
    ONE = "One"

