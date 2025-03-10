"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from typing import Optional


@dataclasses.dataclass
class Headers:
    r"""<p>A complex type that specifies the headers that you want CloudFront to forward to the origin for this cache behavior.</p> <p>For the headers that you specify, CloudFront also caches separate versions of a specified object based on the header values in viewer requests. For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>Product</code> header that has a value of either <code>Acme</code> or <code>Apex</code>, and you configure CloudFront to cache your content based on values in the <code>Product</code> header. CloudFront forwards the <code>Product</code> header to the origin and caches the response from the origin once for each header value. For more information about caching based on header values, see <a href=\\"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html\\">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>"""
    
    quantity: int = dataclasses.field()  
    items: Optional[list[str]] = dataclasses.field(default=None)  
    