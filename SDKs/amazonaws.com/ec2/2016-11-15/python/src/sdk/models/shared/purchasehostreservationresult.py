"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from enum import Enum
from typing import Optional

class PurchaseHostReservationResultCurrencyCodeEnum(str, Enum):
    r"""The currency in which the <code>totalUpfrontPrice</code> and <code>totalHourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>."""
    USD = 'USD'

class PurchaseHostReservationResultPurchaseCurrencyCodeEnum(str, Enum):
    r"""The currency in which the <code>UpfrontPrice</code> and <code>HourlyPrice</code> amounts are specified. At this time, the only supported currency is <code>USD</code>."""
    USD = 'USD'

class PurchaseHostReservationResultPurchasePaymentOptionEnum(str, Enum):
    r"""The payment option for the reservation."""
    ALL_UPFRONT = 'AllUpfront'
    PARTIAL_UPFRONT = 'PartialUpfront'
    NO_UPFRONT = 'NoUpfront'


@dataclasses.dataclass
class PurchaseHostReservationResultPurchase:
    r"""Describes the result of the purchase."""
    
    currency_code: Optional[PurchaseHostReservationResultPurchaseCurrencyCodeEnum] = dataclasses.field(default=None)  
    duration: Optional[int] = dataclasses.field(default=None)  
    host_id_set: Optional[list[str]] = dataclasses.field(default=None)  
    host_reservation_id: Optional[str] = dataclasses.field(default=None)  
    hourly_price: Optional[str] = dataclasses.field(default=None)  
    instance_family: Optional[str] = dataclasses.field(default=None)  
    payment_option: Optional[PurchaseHostReservationResultPurchasePaymentOptionEnum] = dataclasses.field(default=None)  
    upfront_price: Optional[str] = dataclasses.field(default=None)  
    

@dataclasses.dataclass
class PurchaseHostReservationResult:
    r"""Success"""
    
    client_token: Optional[str] = dataclasses.field(default=None)  
    currency_code: Optional[PurchaseHostReservationResultCurrencyCodeEnum] = dataclasses.field(default=None)  
    purchase: Optional[list[PurchaseHostReservationResultPurchase]] = dataclasses.field(default=None)  
    total_hourly_price: Optional[str] = dataclasses.field(default=None)  
    total_upfront_price: Optional[str] = dataclasses.field(default=None)  
    